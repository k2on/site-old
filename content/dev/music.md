# Itempotent Local Music Library

Over the past years I have been listening to music on many online services such as Spotify, YouTube and SoundCloud. They all have their pros and cons but I have relized the way to go forward is through MP3 files, let me explain why.

## Spotify

| Pros                                     | Cons                       |
|------------------------------------------|----------------------------|
| * Mainstream music                       | * Little underground music |
| * Control playback from multiple devices | * Strict copyright rules   |
| * Collaberative Playlists                |                            |
| * Good metadata                          |                            |

![Example of a song taken off Spotify](/dev/music/unavailable-spotify.png)

This is an example of a song in my playlist that was taken off the platform. This is my main gripe with Spotify and the final straw came when they removed all of [kloudbug](https://soundcloud.com/kloudbug)'s songs.

## YouTube and SoundSloud

I am putting these in the same boat because they allow for anyone to upload music (or at least it is a lot easier than doing it on Spotify).

| Pros                | Cons                               |
|---------------------|------------------------------------|
| * Underground music | * Music is 2nd to video on YouTube |
|                     | * Usually full length albums/mixes |
|                     | * Bad metadata                     |

There are many songs on SoundCloud and YouTube that are part of full length mixes and if you want to play a specific song you need to know the timestamp.

![Soundcloud Mix](/dev/music/vol-5-sc.png)

Here is the same mix but on Spotify, each track is seperated which allows you to put individual songs in playlists or share them with others.

![Same Album on Spotify](/dev/music/vol-5-spot.png)

## MP3s and WAVs

Over the past month I have been *legally* downloading MP3 and WAV files and directly transfering them to my cell phone. This allows for an offline library of thousands of songs that you have complete control over.

This is the same album put in the form of MP3s loaded into [EMMS](https://www.emacswiki.org/emacs/EMMS):

![Same Album in EMMS](/dev/music/vol-5-emms.png)

But if you're a boomer then you can use something like Apple's music app for playing local audio files.

![Same Album in Apple's music app](/dev/music/vol-5-apple.png)

The great thing about having these files, rather than renting the ablity to stream them, is that you can back them up on a hard drive, sync them with your phone, burn them to a CD.

## The Problem

The problem comes with managing these files, and the files metadata. As of now I have been manually splitting MP3 and adding all the metadata.

I have been thinking about ways to automate this task and in the process, I think I have come up with a way of allowing people to share songs and playlists.

## My Idea

Using code to describe your music library.

### Side Effects

- Version Control
- Share code with others
- Online repositories of music

### Single Example


This is what [Menthalo's Don't Play With The Gang](https://soundcloud.com/menthalo666/dont-play-with-the-gang) looks like:

```yaml
name: DON'T PLAY WITH THE GANG
artist: Menthalo
genre: Phonk
duration: 2:34
released: 2020
sources:
    - https://soundcloud.com/menthalo666/dont-play-with-the-gang
    - https://www.youtube.com/watch?v=qSjg3oXILCw
samples:
    beat:
        - id: Linda Clifford, Only Fooling Myself
          from: 0:00
          to: 0:20
    vocals:
        - id: Migos, Need It
          from: 1:43
```


### Album Example

This example will be in YAML of the same album we have been looking at.


```yaml
name: Holy Mob, Vol. 5
album-artist: Holy Mob
sources:
    single:
        - https://holymob.bandcamp.com/album/holy-mob-volume-5
    full:
        - https://soundcloud.com/holymob/volume5
        - https://www.youtube.com/watch?v=EqVpuKFoCzE
duration: 41:06
genre: Phonk
released: 02/14/2018
tracks:
    - id: Holy Mob, Play Your Cards Right
      name: Play Your Cards Right
      artists:
          - Von Storm
          - Caspian Rose
      sources:
          single:
              - 1
              - https://holymob.bandcamp.com/track/play-your-cards-right
          full: 0:00
      samples:
          beat:
              - id: The Dramatics, What You See Is What You Get
          vocals:
              - id: Hard D, Play My Cards Right
    - id: Holy Mob, Yo Bitch a Fiend
      name: Yo Bitch a Fiend
      artists:
          - Inteus
          - Caspian Rose
      sources:
          single:
              - 2
              - https://holymob.bandcamp.com/track/yo-bitch-a-fiend
          full: 03:05
    - id: Holy Mob, Overdosed
      name: Overdosed
      artist: Ponsuda
      sources:
          single:
              - 3
              - https://holymob.bandcamp.com/track/overdosed
          full: 07:35
    - id: Holy Mob, More Than Me
      name: More Than Me
      artist: Caspian Rose
      sources:
          single:
              - 4
              - https://holymob.bandcamp.com/track/more-than-me
          full: 11:16
      samples:
          vocals:
              - id: Gucci Mane, Break Dancin'
                starts: 0:40
    - id: Holy Mob, Pull That Trigga
      name: Pull That Trigga
      artist: Von Storm
      sources:
          single:
              - 5
              - https://holymob.bandcamp.com/track/pull-that-trigga
          full: 14:41
      samples:
          - id: Paul Martin, Le Troublant Témoignage De Paul Martin
    - id: Holy Mob, Demons In My Soul
      name: Demons In My Soul
      artists:
          - Inteus
          - Gali
          - Ponsuda
      source:
          single:
              - 6
              - https://holymob.bandcamp.com/track/demons-in-my-soul
          full: 18:24
    - id: Holy Mob, Thirsty
      name: Thirsty
      artist: Vedebe
      sources:
          single:
              - 7
              - https://holymob.bandcamp.com/track/thirsty
          full: 21:11
    - id: Holy Mob, Grigia
      name: Grigia
      artists:
          - Inteus
          - l v k s
      sources:
          single:
              - 8
              - https://holymob.bandcamp.com/track/grigia
          full: 23:46
    - id: Holy Mob, Make a Move
      name: Make a Move
      artist: Redhands
      sources:
          single:
              - 9
              - https://holymob.bandcamp.com/track/make-a-move
          full: 26:32
    - id: Holy Mob, Shyne
      name: Shyne
      artist: Sheltr
      sources:
          single:
              - 10
              - https://holymob.bandcamp.com/track/shyne
          full: 29:35
      samples:
          beat:
              - id: Lamont Dozier, Shine
    - id: Holy Mob, Lay It Down
      name: Lay It Down
      artist: Gali
      sources:
          single:
              - 11
              - https://holymob.bandcamp.com/track/lay-it-down
          full: 32:38
    - id: Holy Mob, Overlords
      name: Overlords
      artist: Necroez
      sources:
          single:
              - 12
              - https://holymob.bandcamp.com/track/overlords
          full: 34:57
    - id: Holy Mob, Take It to Myself
      name: Take It to Myself
      artist: Inteus
      sources:
          single:
              - 13
              - https://holymob.bandcamp.com/track/take-it-to-myself
          full: 37:16
```

