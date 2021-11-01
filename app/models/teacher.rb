class Teacher < ApplicationRecord
    validates :name, presence: true
    validates :age, length: {minimum: 1 }
    validates :grade, length: {in: 1..12}
end
