class CreateTalks < ActiveRecord::Migration[5.2]
  def change
    create_table :talks do |t|
      t.text :text, null:false
      t.string :image
      t.integer :status_id
      t.integer :user_id, foreign_key: true
      t.integer :room_id, foreign_key: true
      t.timestamps
    end
  end
end