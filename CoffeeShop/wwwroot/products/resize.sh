#!/bin/bash

for f in *.jpg
do
  echo "Processing $f file..."
  ffmpeg -i $f -vf scale=-1:320 out/$f
done
