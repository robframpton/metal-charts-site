---
title: "Gauge Chart"
description: "Gauge Chart"
layout: "guide"
weight: 3
---

###### {$page.description}

<article id="1">

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
```jsx
<GaugeChart
	columns={[
		{
			id: 'data1',
			data: [87.4]
		}
	]}
/>
```

</article>
