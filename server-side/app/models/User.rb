class User < ActiveRecord::Base
    has_many :posts
    has_many :journals
    has_many :goals


    def self.handleAdd(name)
        puts "a"
        instance = find_by(name:name).id
        # binding.pry
    end

    
end