function one_plus_one() {
  start_application();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Числовая_панель").UIAObject("Один").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Стандартные_операторы").UIAObject("Плюс").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Числовая_панель").UIAObject("Один").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Стандартные_операторы").UIAObject("Равно").Click();
}

function one_plus_one_for_10_times() {
  start_application();
  var i = 0;
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Числовая_панель").UIAObject("Один").Click();
  for (i; i < 9; i++) {
    Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Стандартные_операторы").UIAObject("Плюс").Click();
    Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Числовая_панель").UIAObject("Один").Click();
  }
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Стандартные_операторы").UIAObject("Равно").Click();
}

function higer_maths() {
  start_application();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Стандартные_операторы").UIAObject("Минус").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Числовая_панель").UIAObject("Один").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Числовая_панель").UIAObject("Девять").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Числовая_панель").UIAObject("Девять").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Стандартные_операторы").UIAObject("Умножить_на").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Числовая_панель").UIAObject("Шесть").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Стандартные_операторы").UIAObject("Разделить_на").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Числовая_панель").UIAObject("Семь").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Числовая_панель").UIAObject("Три").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Стандартные_операторы").UIAObject("Равно").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Стандартные_функции").UIAObject("Квадрат").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Стандартные_операторы").UIAObject("Равно").Click();
}

function division_by_zero() {
  start_application();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Числовая_панель").UIAObject("Девять").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Стандартные_операторы").UIAObject("Разделить_на").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("LandmarkTarget").UIAObject("Числовая_панель").UIAObject("Нуль").Click();
}

function build_graph() {
  start_application();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("NavView").UIAObject("Открыть_навигацию").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("NavView").UIAObject("PaneRoot").UIAObject("ScrollViewer").UIAObject("MenuItemsHost").UIAObject("Построение_графиков_Калькулятор").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("Перейти_в_режим_уравнения").UIAObject("SwitchThumb").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("Семь").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("X").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("Научные_функции").UIAObject("Квадрат").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("Стандартные_операторы").UIAObject("Минус").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("Пять").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("Научные_функции").UIAObject("Квадратный_корень").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("Y").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("ScrollViewer").UIAObject("Панель_ввода_функций").UIAObject("Входной_список_функций").UIAObject("Элемент_входного_списка_функций").UIAObject("Элемент_входного_списка_функций").UIAObject("Введите_выражение").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("Равно").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("Нуль").Click();
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").UIAObject("Перейти_в_режим_графа").UIAObject("SwitchThumb").Click();
}

function start_application() {
  TestedApps["calc"]["Run"]();
}

function stop_application() {
  Sys.Process("Microsoft.WindowsCalculator").UIAObject("Калькулятор").Close()
}