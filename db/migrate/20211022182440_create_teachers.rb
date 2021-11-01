class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :age
      t.integer :grade

      t.timestamps
    end
  end
end
