class Admin::GuestsController < Admin::AdminController

  def show
    @resource = Guest.find(params[:id])
    @addresses = [ @resource.address ]
    render template: "admin/users/show"
  end

end