class PostsController < ApplicationController
  
  def index
    @posts = Post.all
    render json: @posts
  end
  
  def show
    @post = Post.find(params[:id])
    render json: @post
  end
  
  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      raise "WRONG"
    end
  end
  
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: @post
  end
  
  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
