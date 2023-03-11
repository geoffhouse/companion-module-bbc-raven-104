export function getPresets() {
    var bgcolor_gray = "5986649";
    var pngImages = {
        record_monitor:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMDc6MDM6MTY8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp7zW19AAAAzUlEQVR4Ae3ZsQ3CQBAEQIxoiYZol6Lgk99oJUdHYOYTr9bSWR4nlu52cwgQIECAAAECBAgQIECAAAEClxI4pt/ms87UM451pmbvufcdXLsAoO6SFlAoegDUXdICCkUPgLpLWkCh6AFQd0kLKBQ9AOouaQGFogdA3SUtoFD0AKi7pAUUih4AdZe0j6S58JobbTIBAgSuLTC+FVhLjfcU4VpqPKdm77m/ALL22dpXvPpRPPmqgACdCLhNgAABAgQIECBAgAABAgQIEPgvgS9aNgySnRQqfgAAAABJRU5ErkJggg==",
        record_chunk:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMDg6MDM6NDY8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrUddB4AAAC7klEQVR4Ae2Zu4oUURCGZ9x1vaPCgKCYCr6AiYEIhqYGGm2qsZgJow9gpA9gJKggrKGXWBAzYdkH8IKKiq6yF9nxK+mGcaZO76mZsu0e6kAxPdVV1fV/fe/T6cQIAkEgCASBIBAEgkAQCAJBIAgEgSAQBILATBHo1qlmMBicZHsXsDPYMewodqjb7W7x+9cgdhnHAvYOe40tYc+JXeN3tgZiT2EvMG3Ma2oJfKsEr+K7hfW0nNb5EDKP3ca2sNRIAfqYSsD/DbuK1XoGuO4Amt+FPcK2GylAn7dLZP1DbL9r43UVo/EHGQIlJAVIjpKc8YqgdkGi4cUcZUXMnLbTWPfDUGOJ2B1ancb5aLSH5e59YaAKw78mKw2j/y9gqM1NuaHL5B+Ysoakq0dWRd1rwDxesf7/r6LBBey9Ya9LqHonwl9150tt4q43Be8j6DQNHrE0yYPfIBF/M+Gvcl+E3MGqAOs6b0DyhGwaCLqDjd3JANen0A1TsU5nJ/HnjTn1hSP0KTbJeELSYa1T/H1jwXtanUb4ELJsFDMcvsKfE5oQ/BZIL7UajfAhpOr1YBhGalmens9pYvDnQnqj5TfCh4jNlHKDX2pc0QThz4G0ruVO6vO+SH+dtBHHvE+OtXxLsYenuQbJQeZxijX6GjTpXUzgeF2kG30Xy7lGCIzR4Xmbv+R7XjhWQ/XZUeUZ/9UHRWmLXCvwDXJcn6Qd8fwR5PkuZoUj+8L9XcwVULHXr0unhqG+tZNvfVn9SU6z3+YLQNbvQTJzMTYQ+8sAWUL7Y0Wa6qDZRYO43ZoO8tcNNdrzRbEUi7j7mQL3lDnDv+TKKZMz2vdNWoSiLHdWY98wmHKZ/O8ZdNo7q1FAypkXSwH6UgFIvnm3e16sPBIKUFUzq3uHY8tlAHxQAK3iq3VmVf0eXDbp/Ys4bW6+x9fDjdFtEbuCT740lnPzj1l+NpNz86Pi438QCAJBIAgEgSAQBIJAEAgCQSAIBIEgMAWB34MN8jFLzPEmAAAAAElFTkSuQmCC",
        record_start:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMDg6MDM6Njk8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqrGqZTAAAByUlEQVR4Ae2ZMU7DQBBFbRDhAFGEREtouAr3ok2VS1Ck4wTcgYq0kSg4AAnI+R9sKQU2EZo/yMsf6WsjZz2z+zy73l1Xlc0ETMAETMAETMAETMAETMAETMAETMAEiiJQ/0VvmqaZIu5tqyuUlxCvvUIbaA09UHVd89r/MICZQ/fQO3SMsR7rz4smhA5OoAW0hX5jvI/3T4oDhU7NoEcowuhnVgwkdgZaR5A58EF/44eETnBYRWXOAZ/Pn/Q77uGGDnDOUNoiY6hJXvOgwrfOE3Qm7MQOvm+wDHgWxqhORM7v4FcJh82mf8aRWngGIXu44HuBTqUt/3L+geJCuZhUZBBXyBlwiIhxGE9mKkCyBn/jeHSAuLfKNGk8RQZx45lp0niKSfoNdDIXcVtM0ueqJ6LIoOzjCWk8BaCN6mn2+JXGUwDiYVemSeMpAPEkMNOk8RSTtFfSQ+nRLvtXQ3UC/1sptxlsZ3gG0al386QwYHiqPIJYDlSJ+GvZxonwle8DWeQTxZ+wA5LPpI+EFHU2XdZXjQ5eO9z8XawD0lcC1DU0qi+rktd8H6DuOiD523wHw6UJmIAJmIAJmIAJmIAJmIAJmIAJmEAwgT0HCL5g7b40dwAAAABJRU5ErkJggg==",
        record_stop:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMDg6MDM6NTI8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpQYDCHAAAAmklEQVR4Ae3SsRHAIAwEQXD/Pdt0cAxknlX6EsHyYxgCBAgQIECAAAECBAgQIECAAAECBAjsCszdxdO9d83pbd3NNbVzmz+3D/z9HlD8MCBAIRCxBgEKgYg1CFAIRKxBgEIgYg0CFAIRaxCgEIhYgwCFQMQaBCgEItYgQCEQsQYBCgExAQIECBAgQIAAAQIECBAgQIAAAQL7Ah8VrwQuQwg/wAAAAABJRU5ErkJggg==",
        playout_stop:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMDg6MDM6NTI8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpQYDCHAAAAmklEQVR4Ae3SsRHAIAwEQXD/Pdt0cAxknlX6EsHyYxgCBAgQIECAAAECBAgQIECAAAECBAjsCszdxdO9d83pbd3NNbVzmz+3D/z9HlD8MCBAIRCxBgEKgYg1CFAIRKxBgEIgYg0CFAIRaxCgEIhYgwCFQMQaBCgEItYgQCEQsQYBCgExAQIECBAgQIAAAQIECBAgQIAAAQL7Ah8VrwQuQwg/wAAAAABJRU5ErkJggg==",
        playout_play:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMjE6MDM6NDQ8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoDmql+AAACAklEQVR4Ae3ZO0sDQRiF4cQbimIhWNjYWFmJhWihNum0Eqs0YkQbCxvBxsJGbP0FtlaWgo2gIFgIijeCIAg2/gFB8ILrO5KExewGwWR2xj0Dn7uZWTNnn/0IXjIZDQlIQAISkIAEJCABCUhAAhKQgAQkECsQBEGeao+9IO0L4BxTRWok7RaR918C4hB8UJtUa+SFaZ0ExHRQeFzyYiitHlX3DcZPIIP1Rq1TzVXfkLYJEKKAmP4eZ3wddM2kyaFA5oP7AqRVyqVc9oi48VodxHJlnHA2YC9Z/E6uPqlxIl+BtExl4+P/sxVu9rcdxKWVcchZf1IUrnZQ2CPHixuQFsKTts59ADIW3dQOSPtUny0cs48vQGWTaU5uQcqXJxp99A3IePRQuyDtUb0CiheYZcl000z8JX9f8bGDwndtftntDE/U+7yl3m9o8f0O2Gsxm80+NXJPHzvoGZAlYKYajWPgfeugIzIXgHk04W0MXzroBYwVKmcTxzwAHzrolJzzwNybwLaHyx30CsYaNZEUjnkYrnbQOdnmgCmakEkO1zroHYwNaswFHOsPhp96a/2545r1YeuhXNowBsj8C2iLanMpayJZIoDumBtNJIyLm4aAPjnfpjpczJlYphLQA8fJxEK4vDEwBarL5YzKJgEJSEACEpCABCQgAQlIQAISkIDvAl/1Lpw6I4LSPQAAAABJRU5ErkJggg==",
        playout_pause:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMjE6MDM6ODQ8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgryvin5AAAAp0lEQVR4Ae3Syw2AIAAFQbH/ntUKWBLjgThc11/GdxwOAQIECBAgQIAAAQIECBAgsJfA+Ppzr+fM3jGeM+tv7589e6WdKxf9+RpA8fcBAQqByBYEKAQiWxCgEIhsQYBCILIFAQqByBYEKAQiWxCgEIhsQYBCILIFAQqByBYEKAQiWxCgEIhsQYBCILIFAQqByBYUQDIBAgQIECBAgAABAgQIECCwm8ANQHcIPNqYJikAAAAASUVORK5CYII=",
        playout_previous:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMjI6MDM6ODk8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp6o8T6AAACHUlEQVR4Ae3avytFYRzHcUc35R8wWEyWG0UUKYNMbJgUGyMbIxt/gMWg/Mgqo0k2pSQhKZPFYDEoJXS8v8Ope+6iOPd5vofPtz6d55xTz/Pc1/MddK+mJpUEJCABCUhAAhKQgAQkIAEJSEACEggqkKZpK5kOumgRi7HpXBUxZ/0cLDBA7shx/Tv39zkdborcMNO1kDXyQawaBlQpcuMh5gKjl3V2SXeI9ZpDLFLEGsBUyApznZEgOLbvUnQQMFX2ukf6bNMhy3UHAdNMlgC5IMFx7CDcdhAwnexvhwyRaOWug4BJyAIilyQqjp2Kqw4CpoM9bZMR25yHctNB4MwBck3c4NgBRe8gYNrZxxYZsw15q6gdBM4MIDfEJY4dVpQOAqaNtTfJhG3CcwXvIHCmALGucY9jBxccyBYtUwUHSpLkAKAuclgGqOBAhgLSE5lkOEue7ZnXigKUYYC0z9i66Sh75u0aFcgwQHok4wznyYs981TRgTIMkOyPRfue5yR75uHqBsgwQHrgMkoWySuJXq6ATAOklGww7CGn9ixmuQPKMEC6ZzxMlslb9vzPXPmLOVe/+WBMVCXnuQnzNw37VcNtB9WC0k233A+SVfJe+6604/wBF/e7GPP2kKu6+f93B9V2Cd1kX8X2k3XyWfuuVOO6E04bsXnW0E/P38GCVM5/Xvjug+m9BCQgAQlIQAISkIAEJCABCUhAAj8U+AJEkh+sfiWwewAAAABJRU5ErkJggg==",
        playout_next:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMjI6MDM6NTE8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgr/8GFTAAACH0lEQVR4Ae3ZMShFURgHcFeUDGJ4ymJhoUhRBhbZjI+JgRebSVmUiY2RjcHAxqKUMogBJaTXG2QQxWCwKsn1/6tTd3nbved8V/+vvu655+mc7/7OJ3q3pkYhAQlIQAISkIAEJCABCUhAAhKQgAT+BOI47v4PFFFWDwGgHazdipyLougtzX2wdjPWO0ys+Y49JhL39ocEQjI+kFNpVoz1Clw4ES9prp9cqzZ5k9G4Bevu4mEOkIWM9shsWR9ArvgiBhUgjbuJPFx9AtGDHbQPpD0kO8t8+AZyIJMYsJvG3ITVayggerQhj4C0jWwSUHWBWXxUBtJo9R8J90nIDko+dTtuToC0iWxMfhB6bAWIDvyndR55D6QhTlgIS0DOoxODcyCtIxvcZKirRSBasK5F5C2QBjgRKqwCOY8uDC6BtIqsd5M+r9aBaFGHXEZeA6mXEz4jD0DOowMD779uPJ08xBmKLOErjSffxVrvoE+ALCBHQuDwMCx30BXqmwHMAwsNFRY76AsYS8jh0Dg8FGsddIeapgFTZnEWwkoHfQNjBTloCYcHZKGDKqiDXXPDgqxFyA76AcYast8qDg8rVAc9Ym/+hbpgEZbDdwfFwNhA9uUBhwfns4OesV8JMKfcOC/hq4O2ANKTNxweYtYd9Io9+Or5mJspEgL4aqKI5Dv01APrenv1nHrxWlACEpCABCQgAQlIQAISkIAEJCCBjAV+AZvKrI6p3LEmAAAAAElFTkSuQmCC",
        playout_nextstep:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMjI6MDM6MzA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpTZvJsAAACOElEQVR4Ae2XoU5cYRSECSENCBQoJMGhEbjyABgkb4BqJW9QW8UbIGt4AHAV1XWksqpVFW1C026/48jHkuwRJD3JnGSSncmc3TuT3fvvXVvLpIE0kAbSQBpIA2kgDaSBNJAG0kAaSANpIA0818BisbgAv4HnCmHDe2gtv/dHckK/Bt+B5w5hx6HQWn7vj+SE3gefgecLwqFDobX83h/JCb0NboDnB8KpQ6G1/N4fyQm9Dt4Bzx+ES4dCa/m9P5YT/Bz8Ap5rhE0HQ2v5vT+SE/oIfAWeTwh7DoXW8nt/JK8iQBXiqeKOHAqt5ff+SE7oTVA/LU/9BM8dCq3l9/5YTvBLUDdrT93U1x0MreX3/khO6FNQx76n/h5sOxRay+/9kZzQh6D+QHrqj+a+Q6G1/N4fyQm9A26Bpx5ZThwKreX3/khO6A1QD7Weevi9cCi0lt/7q/InN8NVF1/A95f3fFjyvnWNr5boXf+Stxgi8W3YAh+A5yfCmWOgtfzeH8UJuws+As83hGOHQWv5vT+KE/YA3ANPaQcOUxpY2e/9UZygx6C+JZ76Nu06DFrL7/1RnLBnoO4vnroPbTkMWsvv/VGcsG/BskeM9+hPTtWuf1QZjy+2woMqwVNlvXnsrddoLb/3R3HCto7lrn9UGb5YwraO5a7fnzeKE7Z1LHf9o8rwxRK2dSx3/f68UZywrWO56x9Vhi+WsDnGXUp4GkgDaSANpIE0kAbSQBpIA2kgDaSBNJAG/p8G/gF6flINrMC7ogAAAABJRU5ErkJggg==",
        playout_previousstep:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMjI6MDM6NTY8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpTxdDHAAACOklEQVR4Ae2Yvy4FYRTERUQoVG6lFJ1aoeMBNLf0BipKb6BVeQOlxgPQKdQ6UaqoFCSE63e6zbiFiT/JSeYkk+yZzNlvZ7J3v907M5NKAkkgCSSBJJAEkkASSAJJIAkkgSSQBJJAEviLBCaTyRw4AVpvEHu6Jpyl1/lWPWaXwSXQeoTYUjNwll7nW/WYXQd3QOsGYlXNwFl6nW/VY3YHPAGtc4glNQNn6XW+VY/ZQ/AOtI4gZtUMnKXX+TY9RhfAKdB6gdhVI3CWXudb9ZhdAddA6x5iQ83AWXqdb9VXAKCC0KrAVtQMnKXX+VY9ZndB/YS06qe2oGbgLL3Ot+kxOgvqoatVD+dDNQJn6XW+VY/ZJVDbtVZt6ztqBs7S63yrHrOroF70tOqFcF3NwFl6nW/VY3Yb1CeC1gXEspqBs/Q636rH7B6oj0ut+gidUzNwll7n/6P/8sb6w0XnmZ92zlf4jynndvVTTtGM4q4Yg2egdQaxqHbgLL3Ot+wxvQkegNYVxEhNwVl6nW/ZY3oN3AKt4tbUVHHg23qdb9ljeATqrtGqu2tTTcFZep1v2WN6EdTzR6ueU2M1BWfpdb5lj+n6hDgGWvXJcaCm4Cy9zrftMb4Ppv1JVuF9eT1w9W2DGV44pq1t3dUP12p7jGlrW3f1bYMZXjimrW3d1Q/XanuMaWtbd/VtgxleOKatbd3VD9dqe4xpa1t39W2DyYUngSSQBJJAEkgCSSAJJIEkkASSQBJIAkng9xP4BPUfUg02VRu0AAAAAElFTkSuQmCC",
        playout_previousframe:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjA8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMjI6MDM6NjA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrGY1QgAAAB0UlEQVR4Ae2XMU5CURBFCSEGCiqoKAkdtQWdLoCGkh1QackObK3cgaWNC5DOwtrOWFppZaGJRvFMQsPkJXybySTv3uSGvCE/c9/h8/+8VksSAREQAREQAREQAREQAREQAREQAREQARGIIrDdbjv4Cnt9U1hF5UjZBwADvMFebxROUoaOCgWAKX72ZFg/4nFUjpR9ADDH79jrlkI/ZeioUABY4x9PhvUFbkflSNeHzXfxNfb6pLBMFzgyEABG+MGTYf2CjyOzpOtlAHYg+NiTARulCxwZCABLbH8hL/urdSOzpOrF5tvYHrpe9nBepwobHQYAfWyvay97rc+j86TqB4AxtkHPywbCaaqw0WEAcIrtiOB1R2EQnSdVPwCssB0uvewQ2kkVthAmYjo9om+pzxf130Km+krcKQv84W8h1je4Vx+Rwo4BMcOv2OuewrBwSX0lQEzwkye0q03qI1LYMTCG2O4aL7u7ZoVL6isBooft+eNlz6lFfUQKOwaEHTkuPSHWduQ4L1xSZwkYZzsofOzJ4JXGg/pAAUJjwKGfHUgaAxpA0hjQAJLGgAaQNAY0gKQx4BAkfS8CIiACIiACIiACIiACIiACIiACIiAC/yfwB+AlKQiNeo1oAAAAAElFTkSuQmCC",
        playout_nextframe:
            "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMTFUMjI6MDM6OTQ8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy45PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrRmfD4AAABzElEQVR4Ae3XoU4DQRDG8aZpSCuqWoVs6qor6uABair7BlUg+wZYFG+AxPAA4BBoHEGiQCEggcDxnwQ12V52k6Ypc98kn7jJdmF+HLe9VkslAQlIQAISkIAEJCABCUhAAhKQgAQkUCJQVdWKfBFfFzQ6JXuFXQvEEXn1QlzfkkHYwUsGA2JEHoivJxqTkr3CrgWiT669ENdvZB528JLBgGiTM+Lrm8a6ZK/Qa8FYkg+vxPUl6YYePnc4IKbkmfi6p3GYu0/odQZBDMSXwU1DD587HBBdYv9avuxfcJm7T/h1YKyJPax92UO9HR4gZ0Ag5sSOfV/29aCfs0f4NUBMiH2B9GVfNEfhAXIGBGJAbrwQ1/bKcpyzR/g1QHSIvdT6spff1S4A9v3B9wPCZwLCfu+DRL85Le6QHrnytw7X72TRHInEpAAMyR3x9UJjlvhIc1oAjMmjl/nrjZsjkZgUhBmxu8SX3U3DxEea0wJgQez54sueQ73mSCQmBeCUpF4xzunv+0mbmGhLLRueGIIvwzrZ0o/5n9sAoGN8058OHB3jNTg6xmtwdIzX4OgYr8HRMb4JR30JSEACEpCABCQgAQlIQAISkIAEJLBbgV8i3CkImyxPlwAAAABJRU5ErkJggg==",
    };

    const presets = {
        record_monitor: {
            type: "button",
            category: "Record Controls",
            name: "Monitor",
            style: {
                text: "",
                pngalignment: "center:center",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.record_monitor,
            },
            feedbacks: [
                {
                    feedbackId: "is_monitoring",
                    options: {},
                },
            ],
            steps: [
                {
                    down: [
                        {
                            actionId: "record_monitor",
                            options: {},
                        },
                    ],
                    up: [],
                },
            ],
        },
        record_start: {
            type: "button",
            category: "Record Controls",
            name: "Start",
            style: {
                pngalignment: "center:center",
                text: "",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.record_start,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: "record_start",
                            options: {},
                        },
                    ],
                    up: [],
                },
            ],
            feedbacks: [
                {
                    feedbackId: "is_recording",
                    options: {},
                },
            ],
        },
        record_chunk: {
            type: "button",
            category: "Record Controls",
            name: "Chunk",
            style: {
                pngalignment: "center:center",
                text: "",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.record_chunk,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: "record_chunknow",
                            options: {},
                        },
                    ],
                    up: [],
                },
            ],
        },
        record_stop: {
            type: "button",
            category: "Record Controls",
            name: "Stop",
            style: {
                pngalignment: "center:center",
                text: "",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.record_stop,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: "record_stop",
                            options: {},
                        },
                    ],
                    up: [],
                },
            ],
            feedbacks: [
                {
                    feedbackId: "is_idle",
                    options: {},
                },
            ],
        },
        playout_stop: {
            type: "button",
            category: "Playout Controls",
            name: "Stop",
            style: {
                pngalignment: "center:center",
                text: "",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.playout_stop,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: "playout_stop",
                            options: {},
                        },
                    ],
                    up: [],
                },
            ],
            feedbacks: [
                {
                    feedbackId: "is_idle",
                    options: {},
                },
            ],
        },
        playout_play: {
            type: "button",
            category: "Playout Controls",
            name: "Play",
            style: {
                pngalignment: "center:center",
                text: "",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.playout_play,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: "playout_play",
                            options: {},
                        },
                    ],
                    up: [],
                },
            ],
            feedbacks: [
                {
                    feedbackId: "is_playing",
                    options: {},
                },
            ],
        },
        playout_pause: {
            type: "button",
            category: "Playout Controls",
            name: "Pause",
            style: {
                pngalignment: "center:center",
                text: "",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.playout_pause,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: "playout_pause",
                            options: {},
                        },
                    ],
                    up: [],
                },
            ],
            feedbacks: [
                {
                    feedbackId: "is_paused",
                    options: {},
                },
            ],
        },
        playout_previous: {
            type: "button",
            category: "Playout Controls",
            name: "Previous",
            style: {
                pngalignment: "center:center",
                text: "",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.playout_previous,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: "playout_previous",
                            options: {},
                        },
                    ],
                    up: [],
                },
            ],
        },
        playout_previous_step: {
            type: "button",
            category: "Playout Controls",
            name: "Previous Step",
            style: {
                pngalignment: "center:center",
                text: "",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.playout_previousstep,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: "playout_previousstep",
                            options: {},
                        },
                    ],
                    up: [],
                },
            ],
        },
        playout_previous_frame: {
            type: "button",
            category: "Playout Controls",
            name: "Previous Frame",
            style: {
                pngalignment: "center:center",
                text: "",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.playout_previousframe,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: "playout_previousframe",
                            options: {},
                        },
                    ],
                    up: [],
                },
            ],
        },
        playout_next_step: {
            type: "button",
            category: "Playout Controls",
            name: "Next Step",
            style: {
                pngalignment: "center:center",
                text: "",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.playout_nextstep,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: "playout_nextstep",
                            options: {},
                        },
                    ],
                    up: [],
                },
            ],
        },
        playout_next_frame: {
            type: "button",
            category: "Playout Controls",
            name: "Next Frame",
            style: {
                pngalignment: "center:center",
                text: "",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.playout_nextframe,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: "playout_nextframe",
                            options: {},
                        },
                    ],
                    up: [],
                },
                {
                    action: "playout_nextframe",
                },
            ],
        },
        playout_next: {
            type: "button",
            category: "Playout Controls",
            name: "Next",
            style: {
                pngalignment: "center:center",
                text: "",
                size: "14",
                bgcolor: bgcolor_gray,
                png64: pngImages.playout_next,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: "playout_next",
                            options: {},
                        },
                    ],
                    up: [],
                },
            ],
        },
    };
    this.setPresetDefinitions(presets);
}
