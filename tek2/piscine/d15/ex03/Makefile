BINPATH ?= ..
NAME ?= test03
BIN ?= $(BINPATH)/$(NAME)
EX ?= ex03
TESTSRCS ?= *.cpp
EXSRCS ?=
INCLUDES ?= -I../srcs/$(EX)/
CXXFLAGS ?= -W -Wall -Wextra -Werror
LDFLAGS ?= -W -Wall -Wextra -Werror

all: $(NAME)

$(NAME):
	g++ -o $(BIN) $(TESTSRCS) $(EXSRCS) $(INCLUDES) $(LDFLAGS)

fclean:
	rm $(BIN)

re: fclean all

.PHONY: all fclean re
