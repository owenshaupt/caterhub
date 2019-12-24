@modifiers.each do |modifier|
  json.set! modifier.id do
    json.partial! 'modifier', modifier: modifier
  end
end