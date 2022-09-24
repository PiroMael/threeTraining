class PagesController < ApplicationController
  def home
  end
  
  def test
  end

  def clips
    @clips = Clip.all
  end
end
