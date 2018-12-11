<?php 
	header('content-type:text/html;charset="utf-8"');
	$username = $_POST['username'];
	$password = $_POST['password'];

	//1 连接数据库
	$link = mysql_connect("localhost", "root", "123456");
	//2、判断数据库是否链接成功
	if(!$link){
		echo '数据库链接失败';
		exit; //退出整个php程序
	}

	//3、设置字符集
	mysql_set_charset('utf8');

	//4、选择数据库
	mysql_select_db("5lu");

	//5 准备发送sql语句
		/*
			会出现几种情况
			1、用户名或密码错误
			2、用户名不存在
			3、登陆成功
		*/
		//5、准备sql语句
		$sql = "select * from 5lu_text where phone='{$username}'";
		//6、发送sql语句
		$res = mysql_query($sql);
		//7、处理结果
		$row = mysql_fetch_assoc($res);
		if(!$row){
			echo "用户名不存在";
		}else{
			$sql = "select * from 5lu_text where phone='{$username}' AND password='{$password}'";
			$res = mysql_query($sql);
			$row = mysql_fetch_assoc($res);
			if($row){
				echo '登陆成功';
			}else{
				echo "用户名或密码错误";
			}
		}
	//8、关闭数据
	mysql_close($link);
?>