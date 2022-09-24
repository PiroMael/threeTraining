class AddChaineToClips < ActiveRecord::Migration[6.1]
  def change
    add_column :clips, :chaine, :string
  end
end
