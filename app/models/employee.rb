class Employee < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_one :employee_profile, dependent: :destroy

  after_create :set_profile

  def set_profile
    EmployeeProfile.create(employee: self)
  end
end