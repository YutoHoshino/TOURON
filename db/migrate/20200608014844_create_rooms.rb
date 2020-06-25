class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :category_id, null: false
      t.string :period, null: false
      t.string :image, null: false
      t.string :status
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
