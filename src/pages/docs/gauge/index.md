---
title: "Gauge Chart"
description: "Gauge Chart"
layout: "guide"
icon: "hammer"
weight: 1
---

###### {$page.description}

<article id="1">

## Example

{call GaugeChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [87.4]
		]
	] /}
{/call}

```soy
{call GaugeChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [87.4]
		]
	] /}
{/call}
```

</article>
