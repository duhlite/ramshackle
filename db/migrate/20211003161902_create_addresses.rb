class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.string :line_one, null: false
      t.string :line_two
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false

      t.belongs_to :guest, null: true
      t.belongs_to :user, null: true
      t.timestamps
    end
  end
end
