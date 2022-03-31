class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/users" do
    users = User.all
    users.to_json
  end

  get "/users/four" do
    users = User.onlyFour
    users.to_json
  end

  get "/users/:id" do
    user = User.find(params[:id])
    user.to_json
  end

  get "/goals/:id" do
    goals = Goal.where(user_id: params[:id]).reverse_order.limit(3).todays_goals
    goals.to_json
  end

  get "/journals" do 
    journals = Journal.all.reverse_order
    journals.to_json(include:[:user])
  end

  get "/posts/:num" do 
    num = params[:num].to_i
    posts = Post.all.reverse_order.limit(num)
    posts.to_json(include: {
      user: { only: [:name]} })
  end

  post "/posts" do
    id = User.handleAdd(params[:name])
    posts = Post.create(post:params[:post],user_id: id,img_url:params[:img_url] )
    posts.to_json
  end

  post "/goals/:id" do
    goal = Goal.create(
      user_id: params[:user_id],
      goal: params[:goal],
      status: params[:status]
    )
    goal.to_json
  end

  post "/journals" do 
    journal = Journal.create(
      user_id: params[:user_id],
      title: params[:title],
      journal_entry: params[:body]
    )
    journal.to_json
  end

  patch "/goals/:id" do
    patchedGoal = Goal.find(params[:id])
    patchedGoal.update(
      status: params[:status]
    )
    patchedGoal.to_json
  end
  
end
