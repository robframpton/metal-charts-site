---
title: "Bar Chart"
description: "Bar Chart"
layout: "guide"
weight: 1
---

###### {$page.description}

<article id="1">

{call BarChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [100, 20, 30]
		],
		[
			'id': 'data2',
			'data': [20, 70, 100]
		]
	] /}
{/call}

```soy
{call BarChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [100, 20, 30]
		],
		[
			'id': 'data2',
			'data': [20, 70, 100]
		]
	] /}
{/call}
```

</article>
