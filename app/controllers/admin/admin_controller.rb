class Admin::AdminController < ApplicationController
  before_action :check_admin
  layout "admin"

  private
  def check_admin
    unless current_user.admin
      redirect_to root
    end
  end
end