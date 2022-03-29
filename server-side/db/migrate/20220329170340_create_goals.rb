class CreateGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :goals do |t|
      t.string :goal
      t.references :user
      t.timestamps
    end
  end
end
