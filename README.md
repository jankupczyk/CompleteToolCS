# CompleteToolCS
Simple message generator for Counter-Strike: Global Offensive,  generates ready-to-use commands (based on Source engine {C++}).
---
Includes:
#### COMMANDS 
#### COLORS 
#### RADIO COMMANDS
#### VERSION
---


#### COMMANDS

```playerradio``` - the main part of most of the commands required for the message working

```Radio.WePlanted``` - the main part of chat commands

<br />
<br />
<br />

#### COLORS

| VALUE ASCII   | Color            | Rarity           | EM                                                              |
| ------------- |:----------------:| :---------------:|:---------------------------------------------------------------:|   
| 0x07          | RED              | Covert           | ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) |
| 0x10          | GOLD             | Exceedingly Rare | ![#eda338](https://via.placeholder.com/15/eda338/000000?text=+) |
| 0x0E          | Pinkish purple   | Classified       | ![#9e1ead](https://via.placeholder.com/15/9e1ead/000000?text=+) |
| 0x0C          | Dark blue        | Mil-Spec         | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) |
| 0x0B          | Light blue       | Industrial grade | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) |
| 0x0A          | White            | Consumer grade   | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) |
| 0x03          | Yellow           | Chat color       | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) |
| 0x04          | Darker green     | Green            | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) |
| 0x05          | Light Green      | Green            | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) |
| 0x06          | Orginal Green    | Green            | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) |
| 0x0f          | Light red        | Red              | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) |
| 0x02          | Pure red         | Red              | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) |
| 0x08          | Grey             | CT               | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) |
| NaN           | 0                | 0                | 0                                                               |

<br />
<br />
<br />

#### RADIO COMMANDS


| MAIN COMMAND      | ACTION                          |
|:-----------------:|:-------------------------------:|
| playerradio       | SniperWarning                   |
| playerradio       | SpottedBomber                   |
| playerradio       | DeathCry                        |
| playerradio       | KilledMyEnemy                   |
| playerradio       | SpottedLooseBomb                |
| playerradio       | GoingToGuardLooseBomb           |
| playerradio       | WaitingForHumanToDefuseBomb     |
| playerradio       | ScaredEmote                     |
| playerradio       | OneEnemyLeft                    |
| playerradio       | TwoEnemiesLeft                  |
| playerradio       | ThreeEnemiesLeft                |
| playerradio       | PinnedDown                      |

<br />
<br />

```playerradio DeathCry Ooooo!``` - ```playerradio``` (main command), ```DeathCry``` (Action), ```Ooooo!``` (Random text)

```Command``` &nbsp; ```Action ``` &nbsp; ```Displayed text```

<br />
<br />

For example:

* ```playerradio DeathCry Hello```

![CS-GO-Message-Generator](img/f.PNG)
<br /><br /><br />

* ```playerradio PinnedDown helpppp```

![CS-GO-Message-Generator](img/s.png)
<br /><br /><br />

* ```playerradio ScaredEmote wrrrrr```

![CS-GO-Message-Generator](img/t.PNG)
<br /><br /><br />

#### VERSION
<b>V 1.3</b>
