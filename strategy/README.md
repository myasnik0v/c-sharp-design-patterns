# Стратегия

## Определение
Поведенческий паттерн проектирования, который определяет семейство схожих алгоритмов, инкапсулирует каждый из них в собственном классе, после чего алгоритмы можно взаимозаменять во время исполнения программы

## Структура
![](https://refactoring.guru/images/patterns/diagrams/strategy/structure.png)

## Применимость
- когда нужно использовать разные вариации какого-то поведения внутри класса
- когда есть можество похожих классов, отличающихся только некоторым поведением
- когда нужно скрыть детали реализации алгоритмов для других классов
- когда разные вариации алгоритмов реализованы в виде if-ов, где каждая ветка оператора представляет собой вариацию алгоритма

## Шаги реализации
1. определите алгоритм, который подвержен частым изменениям. Также подойдёт алгоритм, имеющий несколько вариаций, которые выбираются во время выполнения программы.
2. создайте общий интерфейс для всех вариантов алгоритма.
3. поместите вариации алгоритма в собственные классы, которые реализуют этот интерфейс.
4. в классе контекста создайте поле для хранения ссылки на текущий объект-стратегию, а также метод для её изменения. Контекст работает с этим объектом только через общий интерфейс стратегий.
5. клиенты контекста должны подавать в него соответствующий объект-стратегию, когда хотят, чтобы контекст вёл себя определённым образом.

## Преимущества:
- подмена алгоритмов во время выполнения
- отделение алгоритмов, которые могут часто изменяться от остальной системы
- уход от наследования к делегированию
- реализует принцип открытости/закрытости

## Недостатки:
- усложняет программу за счёт дополнительных классов
- клиент должен знать, в чём состоит разница между стратегиями, чтобы выбрать подходящую