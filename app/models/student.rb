class Student < ApplicationRecord
    validates :name, presence: true
    validates :grade, length: { in: 1..12 }
end
