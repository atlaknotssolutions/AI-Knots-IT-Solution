const Product = require("../../module/homemodule/homemodule");

const getAdminProductComments = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID format",
      });
    }

    const product = await Product.findById(id)
      .populate({
        path: "comments.user",
        select: "name email avatar",
      })
      .select("name comments")
      .lean();

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Admin comments fetched successfully",
      data: {
        productId: product._id,
        name: product.name,
        totalComments: product.comments?.length || 0,
        comments: product.comments || [],
      },
    });
  } catch (error) {
    console.error("Error in getAdminProductComments:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching admin comments",
      error: error.message,
    });
  }
};

const deleteAdminComment = async (req, res) => {
  try {
    const { productId, commentId } = req.params;

    // Validate IDs
    if (!productId || !productId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID format",
      });
    }

    if (!commentId || !commentId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid comment ID format",
      });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Check if comment exists
    const comment = product.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }

    // ✅ Fixed: Use pull() instead of remove()
    product.comments.pull(commentId);

    await product.save();

    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
      data: {
        productId: product._id,
        totalComments: product.comments.length,
      },
    });
  } catch (error) {
    console.error("Error in deleteAdminComment:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting comment",
      error: error.message,
    });
  }
};
module.exports = {
  getAdminProductComments,
  deleteAdminComment,
};
