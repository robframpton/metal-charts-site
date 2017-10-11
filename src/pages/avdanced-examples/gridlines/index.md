---
title: "Gridlines"
description: "Gridlines"
layout: "guide"
weight: 1
---

###### {$page.description}

<article id="1">

{call Chart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [10, 70, 30, 120, 20, 10]
		],
		[
			'id': 'data2',
			'data': [100, 150, 120, 90, 10, 55]
		]
	] /}
	{param grid: [
		'x': [
			'show': true
		],
		'y': [
			'show': true
		]
	] /}
{/call}

```soy
{call Chart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [10, 70, 30, 120, 20, 10]
		],
		[
			'id': 'data2',
			'data': [100, 150, 120, 90, 10, 55]
		]
	] /}
	{param grid: [
		'x': [
			'show': true
		],
		'y': [
			'show': true
		]
	] /}
{/call}
```

```jsx
<Chart
	columns={[
		{
			id: 'data1',
			data: [10, 70, 30, 120, 20, 10]
		},
		{
			id: 'data2',
			data: [100, 150, 120, 90, 10, 55]
		}
	]}
	grid={
		x: {
			show: true
		},
		y: {
			show: true
		}
	}
/>
```
</article>