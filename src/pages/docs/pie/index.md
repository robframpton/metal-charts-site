---
title: "Pie Chart"
description: "Pie Chart"
layout: "guide"
icon: "hammer"
weight: 1
---

###### {$page.description}

<article id="1">

## Example

{call PieChart.render}
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
{call PieChart.render}
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
