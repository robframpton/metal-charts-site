---
title: "Donut Chart"
description: "Donut Chart"
layout: "guide"
icon: "hammer"
weight: 2
---

###### {$page.description}

<article id="1">

## Example

{call DonutChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [30]
		],
		[
			'id': 'data2',
			'data': [70]
		]
	] /}
{/call}

```soy
{call DonutChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [30]
		],
		[
			'id': 'data2',
			'data': [70]
		]
	] /}
{/call}
```

</article>
