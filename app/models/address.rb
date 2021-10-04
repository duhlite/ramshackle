class Address < ApplicationRecord
  STATE_ARRAY = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

  # Associations
  belongs_to :user, optional: true
  belongs_to :guest, optional: true

  # Validations
  validates :line_one, :city, :state, :zip, presence: true
  validates :state, inclusion: { in: STATE_ARRAY }
  validates :zip, zipcode: { country_code: :us }
end