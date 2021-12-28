class Promotion < ApplicationRecord
  validates :name, :url, presence: true
  validates :active, inclusion: { in: [true, false]}

  before_save :reset_active

  private
  def reset_active
    if self.active
      Promotion.update_all(active: false)
    end
  end
end