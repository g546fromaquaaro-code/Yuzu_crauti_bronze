const BGM_TRACKS=[
{name:'Sky Pop',rate:.88},{name:'Soda Step',rate:.92},{name:'Bubble Walk',rate:.96},{name:'Mint Parade',rate:1.00},{name:'Candy Rail',rate:1.04},{name:'Cloud Picnic',rate:1.08},{name:'Jelly Hop',rate:.90},{name:'Aqua Park',rate:.98},{name:'Star Cookie',rate:1.06},{name:'Blue Marshmallow',rate:1.12}
];

const SE_SRC='data:audio/wav;base64,UklGRpQDAABXQVZFZm10IBAAAAABAAEAoA8AAKAPAAABAAgAZGF0YXADAACAgIGAfHt/hYaAeHZ+iYyCdHB8jZGEcGt6kJeHbmV3k52Ka2BzlKKOaltwlKSQbFtukqSSbltskKOUcFxqjqOVclxpjKKXdV1niaKYd15mh6GaeV9lhaCbe2Bkg5+cfWFjgZ2dgGJifpyegmRhfJuehGVgepmfhmdgeJifiGhgdpagimpfdJSgi2xfc5OgjW1fcZGgj29gb4+fkXFgbo2fknNgbIuek3Vha4melXdiaoedlnliaYWcl3tjaIObmH1kZ4GamX9lZn+ZmYBnZX6YmoJoZXyXm4RpZHqVm4ZrZHiUm4dsZHeSm4ltZHWRm4tvZHSPm4xxZHKOm45yZHGMm490ZHCKmpB2ZW6JmpF3ZW2HmZJ5ZmyFmJN7Z2uEmJR8aGuCl5V+aWqAlpWAaml/lZaBa2l9lJaDbGh8k5eEbWh6kZeGbmh5kJeHcGh3j5eIcWh2jZeKcmh1jJeLdGh0i5eMdWlziZaNdmlyiJaOeGlxhpWPeWpwhZWQe2tvhJSQfGtugpORfWxugZKRf21tf5KSgG5tfpGSgW9tfZCSg3BsfI+ThHFse46ThXJseYyThnNseIuTh22Ck4RudIyPeW2AkoZwc4qQe219kYhxcYiRfW17kIpzcIaRf255jox1cISRgm93jY13b4KQhHB2i455b4CQhnJ0iY57b32Ph3Nzh49+cHyOiXVyhY9/cHqNinZyg4+BcXiLi3hxgY6DcneKjHpxgI6Fc3aIjHxxfo2GdXWGjX5yfIyHdnSEjX9ye4uJeHSDjIFzeYmJeXOBjIN0eIiKe3N/i4R1d4eKfXR+i4V2doWLfnR9ioZ4doSLgHV7iYd5doKKgXV6iIh6doGKgnZ5h4h8doCJg3d5hYh9dn6JhHh4hIh+dn2IhXl4g4h/d3yHhnp4goiBd3uGhnt4gYiCeHuFhn14f4eCeXqEhn54f4eDenqDhn94foaEe3qChoB5fYWEfHqBhoB5fISEfXqAhoF6fISEfXqAhYJ7fIOEfnp/hIJ8fIKEf3t+hIJ8fIGEf3t+g4N9fIGEgHx+g4N+fICDgHx9goN+fICDgX19gYJ/fH+CgX19gYJ/fX+CgX59gIJ/fX+BgX5+gIKAfn+BgX9+gIGAfn+BgX9+gIGAf3+AgH9/f4CAf3+AgH9/f4CAf3+AgH9/f4CA';
const BGM_SRC='data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAoA8AAKAPAAABAAgAZGF0YUAfAACAgICAf39+foCCgYB/fXx+goOCgH17e4CEhYJ/e3l8g4eFgX15d32GiISAe3Z3gYmJg354dHmGjIiBe3RzfYqNhn94cXSDjoyEfXRveImQi4J5cHB+jpCHf3Zvc4SQjYR8c295ipCKgXlwcX+Oj4Z+dm91hZCMg3tzb3qLkImBeXBygI6Ohn51b3aGkIuDe3Nwe4uPiIB4cHOBjo2FfXVwd4ePioJ7cnF8i4+HgHhxdIKOjIR9dXB4iI+KgnpycX6Mjod/d3F1g46MhH11cXmIjomBenJyf4yNhn93cXaEjouDfHRxeomOiIF6cnOAjIyFfndxd4WOioJ8dHJ7iY2HgHlydIGMjIR+d3J4ho2Jgnt0cn2KjYaAeXN1goyLhH12cnmGjYiBe3RzfoqMhn95c3aDjIqDfXZzeoeMiIF7dHR/iouFf3hzd4OMiYN9dnN7h4yHgXt0dX+Ki4R/eHN4hIyJgnx2dHyIi4aAenR1gIqKhH54dHmFi4iCfHZ0fYiLhoB6dXaBiomDfnh0eoWLh4F8dnV+iIqFf3p1d4KKiYN+eHV6hoqHgXx2dn6IioR/enV4goqIgn14dXuGioaAe3Z2f4iJhH96dXmDiYeCfXh2fIaJhYB7dneAiIiDf3l2eoSJh4F9eHZ9homFgHt3eIGIiIN+eXZ6hImGgX14d36GiISAe3d5gYiHgn55d3uEiIWBfHh3foeIhH97d3mCiIaCfnl3fIWIhYB8eHh/h4eDf3t3eoKHhoF+eXh9hYeEgHx4eYCGh4N/e3h7g4eFgX55eH2Fh4SAfHl5gIaGgn97eHuDh4WBfXp5foWGg4B8eXqBhoWCfnt5fIOGhIF9enl+hYaDf3x5e4GGhYF+e3l9g4aEgH16en+FhYJ/fHl7gYWEgX57en2DhYOAfXp6f4WFgn98enyChYSBfnt6foOFg4B9enuAhISBf3x6fIKFg4F+e3t+g4SCgH17e4CEhIF/fHt9goSDgH58e3+DhIJ/fXt8gISDgX98e32ChIKAfnx8f4ODgX99e32Bg4OBf318foKDgoB+fHx/g4OBf318fYGDgoB/fXx+goOCgH58fYCDg4F/fXx+gYOCgH99fH+Cg4GAfn19gIKCgX9+fX6BgoGAf319f4KCgYB+fX6AgoKAf359foGCgYB/fn1/gYKBf359foCCgYB/fn1/gYGBgH9+fn+BgYB/f35+gIGBgH9+fn+AgYCAf35+gIGBgH9/fn+AgYCAf39+f4CBgIB/f3+AgICAf39/f4CAgIB/f39/gICAgH9/f4CAgIB/f39/gICAgH9/f3+AgIB/f39/gICAgH9/gICAgH9+f4GBgH59f4KCgH58foODgH16foSEgX15fIWGgX14e4aHgnx3eoaJg3x2eIaKg311d4aMhH10dYWNhn10c4WOh31zcoSQiH5zcIKRin9zb4GQin90b3+Qi4B1b36PjIF2b3yPjIF3b3uOjYJ4b3mNjYN4b3iMjoN5cHeLjoR6cHaKj4V7cXWJj4V8cXSHj4Z8cnOGj4d9c3KFj4d+c3GDj4h+dHGCj4l/dXGAj4l/dnB/joqAdnB+jouBd3B8jYuBeHB7jIyCeXF6jIyCeXF5i42DenF3io2Ee3J2iY2Ee3J2iI2FfHN1ho6FfXN0hY6GfXRzhI6HfnVzg42HfnVzgY2If3ZygI2IgHdyf42JgHdyfoyJgXhyfIuKgXlye4uKgnlyeoqLgnpzeYmLg3tzeIiLg3tzd4eMhHx0d4aMhH10doWMhX11dYSMhX51dYOMhn52dIKMhn93dIGMh393dICLh4B4dH+LiIB5dH6KiIF5dH2KiYF6dHyJiYF6dHuJiYJ7dHqIioJ7dXmHioN8dXiGioN9dXiFioR9dneEioR+dneDioV+d3aCioV+d3aBioV/eHaBioZ/eXWAioaAeXV/iYeAenV+iYeAenV9iIeBe3Z8iIiBe3Z7h4iCfHZ7hoiCfHZ6hoiCfXd5hYiDfXd5hImDfXd4g4mEfnh4g4mEfnh4goiEf3l3gYiFf3l3gIiFf3p3f4iFgHp3f4iGgHt3foeGgHt3fYeGgXx3fIaGgXx4fIaHgXx4e4WHgn14e4WHgn14eoSHgn55eoOHg355eoOHg355eYKHg396eYGHg396eYGHhH97eYCGhH97eX+GhIB7eX+GhIB8eX6GhYB8eX6FhYB8eX2FhYF9eX2EhYF9eXyEhYF9enyDhYF+enuDhYJ+enuChYJ+e3uChYJ/e3uBhYJ/e3uBhYN/e3qAhYN/fHqAhYN/fHp/hIOAfHp/hIOAfXp+hIOAfXt+hIOAfXt+g4SAfnt9g4SBfnt9g4SBfnt9goSBfnx8goSBf3x8gYSBf3x8gYSBf3x8gYOCf318gIOCf318gIOCf318gIOCgH18f4OCgH18f4OCgH58f4KCgH58foKCgH58foKCgH59foKCgH59foGCgH99foGCgH99foGCgH99foGCgX99foCCgX9+foCCgX9+foCCgX9+foCBgX9+foCBgYB+fn+BgYB+fn+BgYB/fn+BgYB/fn+BgYB/fn+BgYB/fn+AgYB/fn+AgYB/f3+AgIB/f3+AgIB/f3+AgIB/f3+AgIB/f3+AgIB/f3+AgIB/f3+AgIB/f39/gICAf39/gICAf4CAgH9/f4GAf31/goF/fX6Dgn98fYODf3t7hISAe3qEhoB7eIOHgXt3gomCe3WBioN7dH+LhHxzfYyGfHN7jIh9cniMiX5ydoyLf3Nzi42Ac3GJj4J1cIeQg3ZvhJCEeG+BkIZ5b36Qh3tvfJCIfHB5j4p9cXeOi35ydYyMgHNzio2BdHGIjoJ2cIaPg3dwg4+EeW+Bj4V6cH6Ph3twe4+IfHF5jol+cneNin9zdYuMgHRziY2BdXKHjYJ3cYWOg3hxgo6EeXCAj4V6cX2Oh3xxe46IfXJ5jYl+c3eMin90dYqLgHV0iIyBdnOGjYJ3coSNg3lxgo6EenF/joV7cn2Nhnxye42HfXN5jIl+dHeLin91domLgHZ0h4uBd3OFjIJ4c4OMg3lygY2EenJ/jYV8c32Mhn1ze4yHfnR5i4h+dXeKiX92doiKgHd1houBeHSFi4J5c4OMg3pzgYyEe3N/jIV8dH2Lhn10e4uHfnV5ioh/dniJiYB3doeJgHh1hoqBeXWEioJ6dIKLg3t0gIuEfHR+i4V8dX2Khn11e4qGfnZ5iYd/d3iIiIB3d4aJgHh2hYmBeXaDioJ6dYGKg3t1gIqEfHV+ioR9dnyJhX52e4mGfnd6iId/eHiHh4B4eIWIgXl3hIiBenaDiYJ7doGJg3x2f4mDfXZ+iYR9d3yIhX53e4iFf3h6h4Z/eHmGh4B5eIWHgXp4g4iBe3eCiIJ8d4GIgnx3f4iDfXd+iIR+eHyHhH54e4eFf3l6hoZ/eXmFhoB6eYSGgXt4g4eBe3iBh4J8eICHgn14f4eDfXh+h4N+eX2GhH95fIaEf3p7hYWAenqEhYB7eYOGgXt5goaBfHmBhoF9eYCGgn15f4aCfnl+hoN+en2Fg396fIWEf3p7hISAe3uDhYB8eoKFgHx6gYWBfXqBhYF9eoCFgn56f4WCfnp+hYN/en2Eg397fISDf3t8g4SAfHuDhIB8e4KEgH17gYSBfXuAhIF+e3+EgX57f4SCfnt+hIJ/e32Dgn98fYODf3x8goOAfXyCg4B9fIGDgH18gYOBfnyAg4F+fH+DgX58f4OBf3x+g4J/fH6Cgn99fYKCf319goKAfX2BgoB+fYGCgH59gIKAfn2AgoF+fX+CgX99f4KBf31+goF/fX6CgX99foGBgH5+gYGAfn6BgYB+foCBgH5+gIGAf36AgYB/fn+BgH9+f4GAf35/gYF/fn+BgX9+foGBgH5+gIGAf36AgYB/foCBgH9+gIGAf3+AgIB/f3+AgH9/f4CAf39/gIB/f3+AgH9/f4CAgH9/gICAf3+AgIB/f4CAgH9/gICAf3+AgICAf35/gYGAfn1/goKAfnx+g4OAfXp+hISBfXl8hYaBfXh7hoeCfHd6homDfHZ4hoqDfXV3hoyEfXR1hY2GfXRzhY6HfXNyhJCIfnNwgpGKf3NvgZCKf3Rvf5CLgHVvfo+MgXZvfI+MgXdve46NgnhveY2Ng3hveIyOg3lwd4uOhHpwdoqPhXtxdYmPhXxxdIePhnxyc4aPh31zcoWPh35zcYOPiH50cYKPiX91cYCPiX92cH+OioB2cH6Oi4F3cHyNi4F4cHuMjIJ5cXqMjIJ5cXmLjYN6cXeKjYR7cnaJjYR7cnaIjYV8c3WGjoV9c3SFjoZ9dHOEjod+dXODjYd+dXOBjYh/dnKAjYiAd3J/jYmAd3J+jImBeHJ8i4qBeXJ7i4qCeXJ6iouCenN5iYuDe3N4iIuDe3N3h4yEfHR3hoyEfXR2hYyFfXV1hIyFfnV1g4yGfnZ0goyGf3d0gYyHf3d0gIuHgHh0f4uIgHl0foqIgXl0fYqJgXp0fImJgXp0e4mJgnt0eoiKgnt1eYeKg3x1eIaKg311eIWKhH12d4SKhH52d4OKhX53doKKhX53doGKhX94doGKhn95dYCKhoB5dX+Jh4B6dX6Jh4B6dX2Ih4F7dnyIiIF7dnuHiIJ8dnuGiIJ8dnqGiIJ9d3mFiIN9d3mEiYN9d3iDiYR+eHiDiYR+eHiCiIR/eXeBiIV/eXeAiIV/end/iIWAend/iIaAe3d+h4aAe3d9h4aBfHd8hoaBfHh8hoeBfHh7hYeCfXh7hYeCfXh6hIeCfnl6g4eDfnl6g4eDfnl5goeDf3p5gYeDf3p5gYeEf3t5gIaEf3t5f4aEgHt5f4aEgHx5foaFgHx5foWFgHx5fYWFgX15fYSFgX15fISFgX16fIOFgX56e4OFgn56e4KFgn57e4KFgn97e4GFgn97e4GFg397eoCFg398eoCFg398en+Eg4B8en+Eg4B9en6Eg4B9e36Eg4B9e36DhIB+e32DhIF+e32DhIF+e32ChIF+fHyChIF/fHyBhIF/fHyBhIF/fHyBg4J/fXyAg4J/fXyAg4J/fXyAg4KAfXx/g4KAfXx/g4KAfnx/goKAfnx+goKAfnx+goKAfn1+goKAfn1+gYKAf31+gYKAf31+gYKAf31+gYKBf31+gIKBf35+gIKBf35+gIKBf35+gIGBf35+gIGBgH5+f4GBgH5+f4GBgH9+f4GBgH9+f4GBgH9+f4GBgH9+f4CBgH9+f4CBgH9/f4CAgH9/f4CAgH9/f4CAgH9/f4CAgH9/f4CAgH9/f4CAgH9/f4CAgH9/f3+AgIB/f3+AgIB/gICAgH9+foCBgYB+fX2Bg4KAfXt9g4SCf3x6foWGgn56eH+HhoJ9eHiBiYeBe3Z4hIqGgHp0eYeMhn93cnuKjIV9dXF+jY2Ee3JxgY+MgnlvcoWRi4F3b3WJkIl/dW55i5CHfXNvfI6OhXxycICPjYN6cHKEkIuBeG91h5CJf3ZveIqPh350b3uNjoV8c3B/jo2De3Fyg4+LgXlwdIaPiYB3cHeJj4d+dXB7jI6FfXRxfo2Mg3tycoKOi4J6cXSFj4mAeHF3iI6Hf3ZxeoqOhX11cX2MjIR8c3KBjYuCenJ0hI6JgXlxd4eOh393cXmJjYZ+dXJ8i4yEfHRzgI2LgntzdIONiYF5cnaGjYeAeHJ5iI2GfnZyfIqMhH11c3+Mi4N8dHSCjImBenN2hY2HgHlzeIeMhn93c3uJi4R9dnN+i4qDfHV0gYyJgnt0doSMh4B5c3iGjIZ/eHN7iIuEfnd0fYqKg312dYCLiYJ7dXaDi4eBenR4hYuGf3l0eoeLhX54dH2JioN9dnV/iomCfHV2gouHgXt1eISLhoB5dXqGioV/eHV8iImDfnd1f4mIgnx2doGKh4F7dniDioaAenV6hYqFf3l1fIeJg354dn6IiIJ9d3eAiYeBfHZ4g4mGgHt2eoWJhX96dnyGiYN+eXZ+h4iCfXh3gIiHgXx3eIKJhoB7d3qEiYWAend7hYiEf3l3fYeHgn55d3+Hh4F9eHiBiIaBfHd6g4iFgHt3e4WIg396d32Gh4J+eXh/h4aCfXl5gYeFgXx4eoKHhIB8eHuEh4N/e3h9hYeCfnp4foaGgn55eYCGhYF9eXqCh4SAfHl7g4aDf3t5fISGgn97eX6FhoJ+enmAhoWBfXp6gYaEgH15e4KGg4B8eXyDhoJ/e3l+hIWCfnt6f4WEgX56eoCFhIB9enuChYOAfXp8g4WCf3x6foSFgn97en+EhIF+e3uAhIOAfnt8gYWDgH17fYKEgn99e36DhIF/fHt/g4SBfnx7gISDgH57fIGEgoB+e32ChIJ/fXt+goSBf317foODgX98fH+Dg4B+fHyAg4KAfnx9gYOCgH58foKDgX99fH6Cg4F/fXx/goKAf319gIOCgH59fYGDgYB+fX6BgoF/fn1+goKBf359f4KCgH99fYCCgYB/fX6AgoGAfn1+gYKBf359f4GCgH9+fX+BgYB/fn6AgYGAf35+gIGBgH9+foCBgIB/fn+AgYB/f35/gYGAf35+f4GBgH9+f4CBgIB/f3+AgICAf39/gICAf39/f4CAgH9/f3+AgIB/f3+AgICAf39/gICAgH9/f4CAgH9/f3+AgIB/f4CAgH9/foCBgH99foGCgH58foODgHx7gIWCf3p6g4aCfXh8hoaBe3d+iIZ/eHaCioR9dniHioN7c3uLioF4coCNiH50c4WPhXtxdouOg3hue4+MgHRvgpGIfXFyiJCFem93jY6Cd299kIp/c3CEkId8cXSKj4R5b3mOjIF2b4CQiX5zcoaQhntwdouOg3hvfI6LgHVwgo+IfXJziI+EenB4jIyCd3B+j4p/dHGEj4Z8cnWJjoN5cHqNi4F2cYCPiH50c4aOhXtxd4qNgnlxfI2KgHZxgo6HfXN0h46Ee3F5i4uBeHF+jYl/dXKEjoZ8c3aIjYN6cXqMioF3coCNh351dIWNhXxzd4mMgnlyfIyJgHZzgo2GfXR1h4yEe3J5ioqBeHJ+jIh/dnSDjYV9dHeIi4N6c3uLiYB4c4CMh351dYWMhHx0eImLgnpzfYuIgHd0goyGfnV2houDe3R6iYmBeXN+i4d/d3WDi4V9dXeHioJ7dHuKiIB4dICLhn52doSLhHx1eYiJgnp0fYqHgHh1gYuFfnZ3hYqDfHV6iIiBenV/ioZ/eHaDioR9dniGiYJ7dXyJh4B5dYCKhX53d4SKg312eoeIgXt1fYmHgHl2gYqEfnd4hYmCfHZ7iIeBenZ/iYZ/eHeCiYR9d3mGiIJ8dnyIh4B6doCJhX94eIOIg313eoaHgXt2foiGgHl3gYiEfnh5hIiCfHd8h4aBe3d/iIV/eXiCiIN+eHqFh4F8d32HhoB7eICIhH95eYOHgn14e4WGgXx4foeFgHp4gYeDfnl6hIeCfXh8hoaAe3h/h4R/enmCh4N+eXuEhoF9eH2GhYB7eYCGg396eoKGgn55fIWFgXx5foaEgHt5gYaDfnp7g4aBfXl9hYWAfHl/hoN/e3qBhoJ+enyDhYF9en6FhIB8eoCFg397e4KFgX56fISEgH16foWDf3x6gYWCf3t8goSBfnp9hISAfXp/hIN/fHuBhIJ+e3yDhIF+e36Eg4B9e4CEgn98fIKEgX57fYODgH17f4OCf318gISBf3x9goOBfnx+g4OAfXx/g4J/fXyBg4F/fH2Cg4B+fH6DgoB9fICDgX99fYGDgX98foKCgH58f4KCf319gIKBf319gYKAfn1+goKAfn1/goF/fn2AgoF/fX6BgoB+fX+CgYB+fYCCgX9+foCCgH9+foGBgH9+f4GBf35+gIGAf35+gIGAf35/gYGAf35/gYB/fn6AgYB/fn+AgYB/fn+BgIB/foCBgH9/f4CAgH9/f4CAgH9/f4CAf39/gICAf39/gICAf39/gICAf39/gIB/f3+AgIB/f3+AgIB/f3+AgIB/f3+AgH9/f4CAgH9/f4CAgA==';

let bgmAudio=new Audio(BGM_SRC),bgmDuck=1,currentBgm=0;
bgmAudio.loop=true;bgmAudio.preload='auto';bgmAudio.volume=.16;

function playSe(rate=1,vol=.45){
  if(typeof store!=='undefined'&&store.settings&&!store.settings.se)return;
  const a=new Audio(SE_SRC);
  a.preload='auto';a.volume=vol;a.playbackRate=rate;
  try{const p=a.play();if(p&&p.catch)p.catch(()=>{});}catch(e){}
}
function playTap(){playSe(1,.38)}
function playGood(){playSe(1.22,.50)}
function playBad(){playSe(.72,.45)}
function playClear(){playSe(1.45,.55)}

function getVoice(){
  if(!('speechSynthesis' in window))return null;
  const voices=window.speechSynthesis.getVoices();
  return voices.find(v=>/^en-US/i.test(v.lang))||voices.find(v=>/^en/i.test(v.lang))||null;
}
function duckBgm(on){bgmDuck=on?.2:1;if(bgmAudio)bgmAudio.volume=.16*bgmDuck;}
function speak(text){
  if(!('speechSynthesis' in window))return false;
  const synth=window.speechSynthesis,value=String(text||'').trim();
  if(!value)return false;
  duckBgm(true);
  try{synth.cancel();synth.resume()}catch(e){}
  const u=new SpeechSynthesisUtterance(value);
  const voice=getVoice();if(voice)u.voice=voice;
  u.lang='en-US';u.rate=.82;u.pitch=1;u.volume=1;
  u.onend=()=>duckBgm(false);u.onerror=()=>duckBgm(false);
  try{synth.speak(u);return true}catch(e){duckBgm(false);return false}
}
window.speak=speak;

function stopBgm(){try{bgmAudio.pause();bgmAudio.currentTime=0}catch(e){}}
function startBgmTrack(trackIdx){
  currentBgm=Number(trackIdx)||0;
  const tr=BGM_TRACKS[currentBgm%BGM_TRACKS.length];
  const trackName=document.getElementById('trackName');
  if(trackName)trackName.textContent='BGM: '+tr.name;
  if(typeof store!=='undefined'&&store.settings&&!store.settings.bgm){stopBgm();return;}
  bgmAudio.playbackRate=tr.rate;
  bgmAudio.volume=.16*bgmDuck;
  try{const p=bgmAudio.play();if(p&&p.catch)p.catch(()=>{});}catch(e){}
}
function toggleBgm(){
  store.settings.bgm=!store.settings.bgm;saveStore();updateToggles();
  if(store.settings.bgm)startBgmTrack(state.currentTrack||currentBgm);else stopBgm();
  playTap();
}
function toggleSe(){store.settings.se=!store.settings.se;saveStore();updateToggles();if(store.settings.se)playTap();}
function updateToggles(){
  const bgm=document.getElementById('bgmToggle'),se=document.getElementById('seToggle');
  if(bgm)bgm.textContent=store.settings.bgm?'🎵 BGM ON':'🎵 BGM OFF';
  if(se)se.textContent=store.settings.se?'🔔 SE ON':'🔔 SE OFF';
}

/* iPad Safari: start media synchronously on the first real user gesture. */
function unlockMediaNow(){
  if(typeof store!=='undefined'&&store.settings&&store.settings.bgm){startBgmTrack(typeof state!=='undefined'?(state.currentTrack||currentBgm):currentBgm);}
}
window.addEventListener('pointerdown',unlockMediaNow,{passive:true,once:true});
window.addEventListener('touchend',unlockMediaNow,{passive:true,once:true});
