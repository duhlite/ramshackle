class CreatePromotions < ActiveRecord::Migration[6.1]
  def change
    create_table :promotions do |t|
      t.string :name, null: false
      t.string :url, null: false
      t.string :description
      t.boolean :active, default: false, null: false

      t.timestamps
    end
  end
end
