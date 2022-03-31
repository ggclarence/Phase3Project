class Goal < ActiveRecord::Base
    belongs_to :user

    def self.todays_goals
        current_datetime = DateTime.now
        current_datetime.strftime("%B %d, %Y")
        all.each do |goal|
            if goal.created_at.to_datetime.strftime("%B %d, %Y") == current_datetime.strftime("%B %d, %Y")
                goal
            end
        end
    end

end