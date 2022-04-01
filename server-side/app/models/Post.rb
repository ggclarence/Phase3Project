class Post < ActiveRecord::Base
    belongs_to :user

    def update_post (attributes)
        Post.update(self.id, attributes)
    end
end