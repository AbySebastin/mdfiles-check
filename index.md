<ul>
{% for item in site.data.samplelist.toc %}
    <h3>{{ item.title }}</h3>
      <ul>
          var ls = require('local-storage');
            ls.set('foo', 'bar');
    ls.get('foo');
    ls.get('eInternObject');
          > **Note**
> This is a note

> **Warning**
> ls.get('eInternObject');
          
        {% for entry in item.subfolderitems %}
          <li><a href="{{ entry.url }}">{{ entry.page }}</a></li>
        {% endfor %}
      </ul>
{% endfor %}
</ul>
