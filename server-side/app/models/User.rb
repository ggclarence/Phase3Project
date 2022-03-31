class User < ActiveRecord::Base
    has_many :posts
    has_many :journals
    has_many :goals


    def self.handleAdd(name)
        instance = find_by(name:name).id

    end

    def self.onlyFour
         all = self.all.where.not(id: 1)
         all.sample(4)
    end
    
end