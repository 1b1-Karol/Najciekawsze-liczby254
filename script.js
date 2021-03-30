window.onload = function() {
	{
		var el = document.getElementById('bottom');
		var a = -1*el.offsetHeight;
		el.style.bottom = a+"px";
	}
	{
		var cs = getComputedStyle(document.getElementById('content'));
		var paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
		var borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);
		var t = window.innerHeight - (borderY + paddingY);
		document.getElementById('content').style.minHeight = t + 'px';
	}
	scroll();
}

window.onscroll = scroll;
function scroll()
{
	if((window.innerHeight + window.scrollY) >= document.body.offsetHeight-1)
	{
		var el = document.getElementById('bottom');
		el.style.bottom = '0';
	}
	else
	{
		var el = document.getElementById('bottom');
		var a = -1*el.offsetHeight;
		el.style.bottom = a+'px';
	}
}