otmes.js
========

Попытка вытащить разные полезные функции вывода информации (сообщения об ошибках, просто сообщения, отладка) в одно место. Плюс еще какие-то полезные штуки.

otmes - класс для вывода информации (ошибок, сообщений и дебага)
================================================================
<pre>
использвание:
	конструктор
		вставить в .ready строку типа 
			m = new otmes (''|1,{....}) 
				- первый параметр показывает как надо реагировать на вывод отладочной информации
					если пусто, то не показываем ничего
					если не пусто, то показываем
				- второй параметр - JSON словарь для указания куда выводить ту или иную информацию, использовать
				  этот парамерт имеет смысл, если div-ы нестандартные
					errorDiv - id  div-а для ошибок,
					messagesDiv - id  div-а для сообщений
					debugDiv - id  div-а для отладки
	вызовы
		m.e(строка[,notadd]) - вывод ошибки
		m.d(строка) - вывод отладки
		m.m(строка[,notadd]) - вывод сообщения
			если есть параметр notadd, то выводиться будет только новая инфомация, а старая стираться.

		m.clear(['e'|'m'|'d']) - очистка div-а
			если нет параметров, то очистятся все три дива

		m.beforesave () - очистка строго сообщений и ошибок. используется перед попыткой записи
</pre>
