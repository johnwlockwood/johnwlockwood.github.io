---
layout: home
---

# Welcome to my digital lair

> System initialized...  
> Loading user interface...  
> Connection established...

## Recent Posts

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}

```bash
$ whoami
johnwlockwood - AI enthusiast, developer, hacker

$ ls ~/skills
python.js  machine_learning.md  web_dev/  linux/  creativity.txt

$ ./contact_me.sh
> Available via GitHub, Twitter, or email
```
