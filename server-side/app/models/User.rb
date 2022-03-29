class User < ActiveRecord::Base
    has_many :posts
    has_many :journals
    has_many :goals
end