---
title: "Data Color"
description: "Data Color"
layout: "guide"
weight: 1
---

###### {$page.description}

<article id="1">

{call Chart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [10, 90, 30, 120, 20, 160],
			'color': 'hotpink'
		],
		[
			'id': 'data2',
			'data': [200, 150, 120, 90, 10, 75],
			'color': 'cadetblue'
		]
	] /}
{/call}


```soy
{call Chart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [10, 90, 30, 120, 20, 160],
			'color': 'hotpink'
		],
		[
			'id': 'data2',
			'data': [200, 150, 120, 90, 10, 75],
			'color': 'cadetblue'
		]
	] /}
{/call}
```

```jsx
<Chart
	columns={[
		{
			id: 'data1',
			data: [10, 90, 30, 120, 20, 160],
			color: 'hotpink'
		},
		{
			id: 'data2',
			data: [200, 150, 120, 90, 10, 75],
			color: 'cadetblue'
		}
	]}
/>
```
</article>