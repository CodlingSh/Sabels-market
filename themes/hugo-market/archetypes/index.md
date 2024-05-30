+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName '-' ' ' | title}}'
weight = 999
layout = 'vertical'
showTitle = true
[build]
    list = "always"
    render = "never"
+++