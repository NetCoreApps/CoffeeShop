FROM mcr.microsoft.com/dotnet/sdk:6.0-jammy AS build
WORKDIR /app

COPY . .
RUN dotnet restore

WORKDIR /app/CoffeeShop
RUN dotnet publish -c release -o /out --no-restore

RUN --mount=type=secret,id=googlecloud_credentials_base64 \
    cat /run/secrets/googlecloud_credentials_base64 | base64 -d > /out/googlecloud-credentials.json

FROM mcr.microsoft.com/dotnet/aspnet:6.0-jammy AS runtime

# install node.js, ffmpeg and npm install
RUN apt-get clean && apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends curl gnupg ffmpeg \
    && curl -sL https://deb.nodesource.com/setup_current.x | bash - \
    && apt-get install nodejs -yq

WORKDIR /app
COPY --from=build /out ./

# don't run dev postinstall script when installing npm deps
RUN grep -Ev 'postinstall' package.json > tmp && mv tmp package.json && npm install

ENTRYPOINT ["dotnet", "CoffeeShop.dll"]
