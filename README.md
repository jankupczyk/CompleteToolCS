# CompleteToolCS
Simple message generator for Counter-Strike: Global Offensive,  generates ready-to-use commands (based on Source engine {C++}).
---
Includes:
#### COMMANDS 
#### COLORS 
#### RADIO COMMANDS
#### VERSION
---

Thanks to this generator u can send fake unboxed knife messages, colorful text in-game chat, custom non-know radio binds, fake VAC ban messages or even more, etc...

Feel free to use it!!! :smile::smile::smile:


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
| 0x0C          | Dark blue        | Mil-Spec         | ![#00008B](https://via.placeholder.com/15/00008B/000000?text=+) |
| 0x0B          | Light blue       | Industrial grade | ![#68a3e5](https://via.placeholder.com/15/68a3e5/000000?text=+) |
| 0x0A          | White            | Consumer grade   | ![#f0f8ff](https://via.placeholder.com/15/f0f8ff/000000?text=+) |
| 0x03          | Yellow           | Chat color       | ![#ffdf93](https://via.placeholder.com/15/ffdf93/000000?text=+) |
| 0x04          | Darker green     | Green            | ![#00C301](https://via.placeholder.com/15/00C301/000000?text=+) |
| 0x05          | Light Green      | Green            | ![#95F985](https://via.placeholder.com/15/95F985/000000?text=+) |
| 0x06          | Orginal Green    | Green            | ![#4DED30](https://via.placeholder.com/15/4DED30/000000?text=+) |
| 0x0f          | Light red        | Red              | ![#eb4b4b](https://via.placeholder.com/15/eb4b4b/000000?text=+) |
| 0x02          | Pure red         | Red              | ![#ff0001](https://via.placeholder.com/15/ff0001/000000?text=+) |
| 0x08          | Grey             | CT               | ![#c1c6cc](https://via.placeholder.com/15/c1c6cc/000000?text=+) |
| NaN           | 0                | 0                | ![#000000](https://via.placeholder.com/15/000000/000000?text=+) |

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


### Supported Versions

| Version | Supported {code}   | Features added                             | Date       | Works in game?     |
|:-------:|:------------------:| ------------------------------------------ |:----------:|:------------------:|
| V 1.3   | :white_check_mark: | *Received in trade™*                       | 05/09/2021 | :heavy_check_mark: |
| V 1.0   | :white_check_mark: | *Radio commands*                           | 27/08/2021 | :heavy_check_mark: |
| V 0.5   | :x:                | *Fake VAC message*                         | 29/06/2021 | :heavy_check_mark: |
| V 0.1   | :x:                | *Colorful text*                            | 28/06/2021 | :heavy_check_mark: |
| V 0.01  | :x:                | *Release of CompleteToolCS*                | 27/06/2021 | :heavy_check_mark: |

CURRENT VERSION: <b>V 1.3</b>
