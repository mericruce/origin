(function() {
	/**
	 * 初始化用户选项和电脑选项
	 */
	var uNumber = 0;
	var cNumber = 0;

	/**
	 * 初始化显示区域
	 */
	var userDisplay = document.getElementById('userDisplay');
	var computerDisplay = document.getElementById('computerDisplay');
	var resultDisplay = document.getElementById('resultDisplay');

	/**
	 * 获取表单
	 */
	var userSelect = document.getElementById('userSelect');

	/**
	 * 获取用户选项
	 */
	function userChoose() {
		var radios = userSelect.select;
		var length = radios.length;
		for(var i=0; i<length; i++) {
			if(radios[i].checked) {
				return radios[i].value;
			}
		}
		return '';
	};

	/**
	 * 为按钮元素绑定事件
	 */
	document.getElementById('confirmButton').onclick = function() {
		//输出用户选项
		if(userChoose() === '') {
			userDisplay.innerHTML = "请选择一项，点击确定";
		} else {
			//输出用户选项
			userDisplay.innerHTML = userChoose();
			//输出电脑选项
			showComputerChoose();
		}
	};
	document.getElementById('repeatButton').onclick = function() {
		//清空p
		userDisplay.innerHTML = '';
		computerDisplay.innerHTML = '';
		resultDisplay.innerHTML = '';
		//清空表单
		userSelect.reset();
	};

	/**
	 * 显示电脑选择
	 */
	function showComputerChoose(content) {
		//设置循环函数
		var temp = setInterval(function() {
			computerDisplay.innerHTML = numberToString(Math.floor(Math.random()*3+1));
		}, 5);
		//取消循环函数
		setTimeout(function() {
			clearInterval(temp);
			//获取选项数值
			uNumber = stringToNumber(userDisplay.innerHTML);
			cNumber = stringToNumber(computerDisplay.innerHTML);
			//判断谁赢
			var result = uNumber - cNumber;
			if(result === -1 || result === 2) {
				resultDisplay.innerHTML = '你赢啦';
			} else if(result === 0) {
				resultDisplay.innerHTML = '平局';
			} else {
				resultDisplay.innerHTML = '电脑赢啦';
			}
		}, 2000);
	}

	/**
	 * 数字转换字符串
	 */
	function numberToString(number) {
		switch(number) {
			case 1:
				return '石头';
			case 2:
				return '剪刀';
			case 3:
				return '布';
		}
	}

	/**
	 * 字符串转换数字
	 */
	function stringToNumber(string) {
		if(string === '石头') {
			return 1;
		} else if(string === '剪刀') {
			return 2;
		} else {
			return 3;
		}
	}
})();