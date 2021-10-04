class User < ApplicationRecord
  # Associations
  has_many :addresses

  # Validations
  validates :first_name, :last_name, :email, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: "%{value} is not a valid email address" }

  # DEFAULT DEVISE STUFF BELOW

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
