class Api::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    render json: Product.all
  end

  def show
    render json: @product
  end

  def create
    product = Product.new(product_params)

    if product.save
      render json: product
    else
      render json: product.errors, status: 422
    end
  end

  def update
    @product.name = "name updated" + @product.id.to_s
    @product.description = "description updated" + @product.id.to_s
    if @product.save
      render json: @product
    else
      render json: @product.errors, status: 422
    end
  end

  def destroy
    @product.destroy
    render json: @product
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :description, :price, :department)
  end
end
