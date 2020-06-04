class CreateTalks < ActiveRecord::Migration[5.2]
  def change
    create_table :talks do |t|
      t.text :text, null:false
      t.string :image
      # t.references :user, foreign_key: true
      # t.references :room, foreign_key: true
      t.integer :status_id
      t.timestamps
    end
  end
end