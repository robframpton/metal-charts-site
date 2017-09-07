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

{call Chart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [10, 20, 30]
		],
		[
			'id': 'data2',
			'data': [20, 30, 40]
		]
	] /}
	{param type: 'pie' /}
{/call}

</article>
